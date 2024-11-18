import json

# Load JSON file
with open('disease_remedies.json') as f:
    data = json.load(f)

# Display data
print(data)
