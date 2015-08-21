FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    nickname { Faker::Internet.user_name }
    password { Faker::Internet.password(8) }
    password_confirmation { password }

    factory :confirmed_user do
      confirmed_at Time.zone.now
    end
  end
end
