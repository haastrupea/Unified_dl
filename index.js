/*functionality for lynda course download
using child_process module

--if lynda-dl is not installed, run pip install
--user provide a link/list of links to course[s] they want to download
--prompt for user login if it has not been given before when needed
--download course[s] to a folder named after the course name by default but user can give their own preset
--download each file with [course_id]_[num]_[file_name][ext] name format
--download subtitle file along side too with [course_id]_[num]_[file_name][ext]
--convert the files if the user so wish
--download the highest quality by default but user can set theirs
--user can set numbers of files that can be downloaded concorently
--user can select to pause/resume download or delete course[s] or specific file[s] in any course[s]
--user can see download process of course[s] or its file[s]
--user can preview specific downloaded file in a course or play the whole downloaded courses via vlc just by pushing play button from unified downloader.
*/