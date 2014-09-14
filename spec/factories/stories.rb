FactoryGirl.define do
  factory :story do
    name { Faker::Name.name }
    content { Faker::Lorem.paragraph }
    field { Faker::Name.title }
    age { Faker::Number.number(2) }
    featured false
    role "mentor"
    ethnicity "white"
    gender "male"

    image_file_name { 'test.png' }
    image_content_type { 'image/png' }
    image_file_size { 1024 }
  end
end
