###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# General configuration
activate :sprockets

if defined? RailsAssets
  RailsAssets.load_paths.each do |path|
    sprockets.append_path path
  end
end
# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

after_configuration do
  sprockets.append_path File.join( root, "bower_components/" )
end


# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  activate :relative_assets
  activate :asset_hash
  # activate :asset_host,  :host => 'gurvircheema.com'
end

#Deploy Configurations
activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.branch = 'master'
  deploy.build_before = true
end

activate :google_analytics do |ga|
  ga.tracking_id = 'UA-80545023-1'
end
activate :directory_indexes
