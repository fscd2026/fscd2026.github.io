# -*- encoding: utf-8 -*-
# stub: jekyll-nagymaros 3.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-nagymaros".freeze
  s.version = "3.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["piazzai".freeze]
  s.date = "2024-09-07"
  s.email = ["42124135+piazzai@users.noreply.github.com".freeze]
  s.homepage = "https://github.com/piazzai/jekyll-nagymaros".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.5".freeze
  s.summary = "Jekyll theme for a conference website".freeze

  s.installed_by_version = "3.3.5" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<github-pages>.freeze, ["~> 231"])
    s.add_runtime_dependency(%q<webrick>.freeze, ["~> 1.8", ">= 1.8.1"])
  else
    s.add_dependency(%q<github-pages>.freeze, ["~> 231"])
    s.add_dependency(%q<webrick>.freeze, ["~> 1.8", ">= 1.8.1"])
  end
end
