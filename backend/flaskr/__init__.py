import os

from flask import Flask, request, jsonify
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    CORS(app, resources={r"/*": {"origins": os.getenv("REACT_FRONTEND_URL")}})

    # app.config.from_mapping(
    #     SECRET_KEY="dev",
    #     DATABASE=os.path.join(app.instance_path, "flaskr.sqlite"),
    # )

    if test_config is None:
        app.config.from_pyfile("config.py", silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route("/health")
    def healthcheck():
        return "Server has been eating apples!"

    @app.route("/profile", methods=["GET"])
    def profile():
        try:
            auth_header = request.headers.get('Authorization')

            if not auth_header or not auth_header.startswith("Bearer "):
                return jsonify({"error": "Unauthorized"}), 401

            access_token = auth_header.split(" ")[1]  # Extract token from 'Bearer <token>'

            if not access_token:
                return jsonify({"error": "Missing access token"}), 400

            # Authenticate with Google API
            credentials = Credentials(token=access_token)
            service = build("oauth2", "v2", credentials=credentials)
            user_info = service.userinfo().get().execute()

            # Extract user details
            user_name = user_info.get("name")
            user_email = user_info.get("email")
            user_picture = user_info.get("picture")

            return jsonify({
                "name": user_name,
                "email": user_email,
                "picture": user_picture
            })

        except Exception as e:
            return jsonify({"error": str(e)}), 500

    return app
