use('tutier-su2-23');
db.users.drop();

db.users.insertMany([
    {'_id': 1, 'username': 'alice', 'password': 'abc'}
    {'_id': 1, 'username': 'bob', 'password': 'abc'}
    {'_id': 1, 'username': 'charlie', 'password':'abc'}
]);