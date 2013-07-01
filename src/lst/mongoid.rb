/* require the mongoid gem so that it can be used */
require mongoid

/* define a model class */
class Person
  include Mongoid::Document
  field :first_name, type: String
  field :last_name, type: String
  field :dateOfBirth, type: Date
  field :job, type: String
  field :company, type: String
  field :salary, type: Integer
end

/* instantiate a Person */
john = Person.new(
  first_name: John,
  last_name: Doe,
  date_of_birth: Date.new(1971, 04, 20),
  job: "Assistant Manger",
  company: "FooCorp",
  salary: 5000)

/* persist the object to the db, raise errors if validation fails */
john.save!

/* retrieve all employees of FooCorp */
foos = Person.where(company: "FooCorp")

/* print each employees name */
foos.each |employee| do
  print employee.first_name
end