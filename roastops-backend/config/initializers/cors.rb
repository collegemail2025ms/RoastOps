Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # later change this to your frontend URL
    resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
  end
end
