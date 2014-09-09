FactoryGirl.define do
  factory :story do
    name { Faker::Name.name }
    content { Faker::Lorem.paragraph }
    image "image.jpg"
    field { Faker::Name.title }
    age { Faker::Number.number(2) }
    featured false
  end
end
