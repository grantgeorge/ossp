FactoryGirl.define do
  factory :pitch do
    title { Faker::Hacker.noun }
    text { Faker::Hacker.say_something_smart }
    association :user, factory: :user
  end
end
