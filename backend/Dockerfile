FROM python:3.11-slim

# Environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set workdir
WORKDIR /usr/src/app

# Install OS dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the app
COPY . .

# Expose Flask port
EXPOSE 5000

# Set Flask environment for dev with auto-reload
ENV FLASK_APP=flaskr/__init__.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_ENV=development

# Run Flask with auto-reload
CMD ["flask", "run", "--reload"]
