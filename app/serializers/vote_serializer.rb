class VoteSerializer < ActiveModel::Serializer
  attributes :id, :up, :user_id, :pitch_id
  # attributes(*Vote.attribute_names.map(&:to_sym))
end
