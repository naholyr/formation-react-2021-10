users = ["John", "Bob", "Alice"] users = ["Alice", "Bob", "John"]
users.map((user, index) => { users.map((user, index) => {
return <Contact key={index} user={user} /> return <Contact key={index} user={user} />
}) })

<Contact key={1} user="John"> <Contact key={1} user="Alice">
<Contact key={2} user="Bob"> <Contact key={2} user="Bob">
<Contact key={3} user="Alice"> <Contact key={3} user="John">

Contact :

  <div>
    <h3>{user.name}</h3>
    <address>{user.address}</address>
    ...
  </div>

users = ["John", "Bob", "Alice"] users = ["Alice", "Bob", "John"]
users.map((user, index) => { users.map((user, index) => {
return <Contact key={user.id} user={user} /> return <Contact key={user.id} user={user} />
}) })

<Contact key="j" user="John"> <Contact key="a" user="Alice">
<Contact key="b" user="Bob"> <Contact key="b" user="Bob">
<Contact key="a" user="Alice"> <Contact key="j" user="John">
