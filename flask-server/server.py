from flask import Flask,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Members API Route
# git request
@app.route("/members")
def members():
    return{"members":["Member1" , "Member2" , "Member3"]}
# post request
@app.route("/tryPost", methods=["POST"])
def post_request():
    posted_data = request.json.get("data")
    
    # Do something with the member posted_data, for example add it to a database
    print(posted_data)
    return {"message": f"{posted_data} added successfully"}

if __name__ == "__main__":
    app.run(debug = True)
