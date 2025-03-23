from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from dotenv import load_dotenv

load_dotenv()

def get_user_name(access_token):
    credentials = Credentials(token=access_token)
    service = build("oauth2", "v2", credentials=credentials)

    user_info = service.userinfo().get().execute()
    return user_info.get("name")