#! /bin/bash

# update the rubygems package manager
gem update --system

# install the mongodb driver
gem install mongo

# install the C version of BSON to improve performance
gem install bson_ext