class Player < ApplicationRecord
  belongs_to :image
  enum position: [ :setter, :middle, :opposite, :libero, :wing, :coach]

  validates_presence_of :position, :name, :surname

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
      when "coach"
	"Trener"
    end
  end
end
