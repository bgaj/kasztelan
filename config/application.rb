require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsReactWebpacker
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1
    config.time_zone = 'Europe/Warsaw'
    config.middleware.use Rack::Deflater
    config.i18n.available_locales = [:pl, :en]
    config.i18n.default_locale = :pl
    config.i18n.load_path += Dir["#{Rails.root.to_s}/config/locales/*.{rb,yml}"]
    config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
    config.assets.precompile << /\.(?:svg|eot|woff|ttf|woff2)\z/
    config.autoload_paths += Dir[ Rails.root.join('app', 'models', '**/'), Rails.root.join('app', 'services', '**/') ]


    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
