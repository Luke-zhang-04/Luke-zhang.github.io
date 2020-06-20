#!/usr/bin/env bash

# Luke-zhang-04.github.io
# 
# Copyright (C) 2020 Luke Zhang
# 
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published
# by the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# 
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
# 
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

executables=("home")

for script in "${executables[@]}"; do
    npx browserify ./nodejs/"${script}".js > ./js/"${script}."js
done
