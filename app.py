from flask import Flask, request, jsonify,redirect,url_for
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:4200"}})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data['uname']
    password = data['password']
    conn = sqlite3.connect('test.sqlite3')
    cursor = conn.cursor()
    cursor.execute('''SELECT * FROM "login"''')
    rows = cursor.fetchall()
    for i in rows:
        if i[0]==username and i[1]==password:
            return jsonify({'message': 'Correct'})
    else:
        return jsonify({'message': 'Invalid credentials'})
@app.route('/sucess')
def sucess():
    print('test')
    return jsonify({'message': 'Correct credentials'})

if __name__ == '__main__':
    app.run(debug=True)