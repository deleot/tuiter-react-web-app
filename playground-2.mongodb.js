use('tutier-su2-23');
db.users.drop();

db.users.insertMany([
    {'_id': 1, 'username': 'alice', 'password'},
    {'_id': 1, 'username': 'bob', 'password'},
    {'_id': 1, 'username': 'charlie', 'password'},
]);