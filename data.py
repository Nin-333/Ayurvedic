from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Load data from JSON file
with open('disease_remedies.json') as f:
    remedies_data = json.load(f)

# Function to find remedies for a disease
def get_remedies(disease_name):
    for entry in remedies_data:
        if entry['disease'].lower() == disease_name.lower():
            return entry['remedies']
    return [{"natural_remedy": "No remedy found", "description": "No suitable remedy for this disease."}]

# Flask route to handle recommendations
@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    disease = data.get('disease', '')
    remedies = get_remedies(disease)
    return jsonify({"recommendations": remedies})

if __name__ == '__main__':
    app.run(debug=True)
