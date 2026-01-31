##Table name: users

##Columns
- id: uuid : primary key 
- name: text : not null
- email : text : (unique)
- password: text: not null
- role (customer | owner | driver): not null
- created_at: time stamp: default now()

##Constarints
- Email must be unique
- Role must be one of (customer | owner | driver)

##Relationships
- one owner can have multiple vehicles
- one driver can be assigned to one vehicle
- one cstomer can create multiple trips
