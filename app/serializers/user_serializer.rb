class UserSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :uid, :email
end
