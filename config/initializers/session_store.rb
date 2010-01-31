# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_UIKIT_session',
  :secret      => 'b76a0f8ff5b699bf5b3300638977edf7d1b365d692839afa441affcf965ffadc3ef28ddd68308a7d397a32c2b3c4d3bca4031d4312bebaf85aa2b95ddec6ff5a'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
