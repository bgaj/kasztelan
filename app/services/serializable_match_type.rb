class SerializableMatchType < JSONAPI::Serializable::Resource

  type 'match_type'
  id { @object.name }
  attributes :name, :full_name

  attribute :teams do
    Team.where(id: @object.matches.map(&:home_id)+@object.matches.map(&:guest_id)).map do |team|
      logo =  team.image.image.small_thumb.url
        {name: team.name,
         logo: logo,
        id: team.id}
    end
  end

  attribute :rounds do
    matches_groups = @object.matches.group_by(&:round).sort
    matches_groups.map do |number, group|
      {
          round: number,
          matches: group.map do |match|
            {
                match_date: match.match_date,
                match_time: match.match_time,
                home: match.home_id,
                guest: match.guest_id,
                result: match.result
            }
          end
      }
    end
  end
end