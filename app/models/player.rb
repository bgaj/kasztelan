class Player < ApplicationRecord
  belongs_to :image
  enum position: [ :setter, :middle, :opposite, :libero, :wing]

  validates_presence_of :position, :number, :name, :surname

  scope :number_order, -> { order(number: :asc)}

  def position_name
    case position
      when "setter"
        "Rozgrywający"
      when "middle"
        "Środkowy"
      when "opposite"
        "Atakujący"
      when "libero"
        "Libero"
      when "wing"
        "Przyjmujący"
    end
  end
end
