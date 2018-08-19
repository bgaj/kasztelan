# -*- encoding : utf-8 -*-
namespace :import_posts do

  desc 'create application task rates'
  task :from_csv => :environment do
    require 'csv'
    CSV.foreach('./lib/posts.csv', headers: true) do |row|
      date = Date.today
      date = Date.new(row["Date"][0..3].to_i, row["Date"][4..5].to_i, row["Date"][6..7].to_i ) if row["Date"].size == 8
      image = row["Image URL"].split("|")[0] if row["Image URL"]
      image_name = image.split('/').last if image
      a = Post.create!(
              title: row['Title'],
              content: row['Content'],
              meta_description: row['_yoast_wpseo_metadesc'],
              slug: row['Slug'],
              lead: row['Krótki opis'],
              published: row['Status'] != 'draft' ? true : false,
              created_at: date
      )
      a.thumbnail.attach io: open(image), filename: image_name if image
    end
  end
end
