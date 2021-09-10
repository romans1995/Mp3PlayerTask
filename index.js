const player = {
  songs: [
    {
      id: 1,
      title: 'Vortex',
      album: 'Wallflowers',
      artist: 'Jinjer',
      duration: 242,
    },
    {
      id: 2,
      title: 'Vinda',
      album: 'Godtfolk',
      artist: 'Songleikr',
      duration: 160,
    },
    {
      id: 7,
      title: 'Shiroyama',
      album: 'The Last Stand',
      artist: 'Sabaton',
      duration: 213,
    },
    {
      id: 3,
      title: 'Thunderstruck',
      album: 'The Razors Edge',
      artist: 'AC/DC',
      duration: 292,
    },
    {
      id: 4,
      title: 'All is One',
      album: 'All is One',
      artist: 'Orphaned Land',
      duration: 270,
    },
    {
      id: 5,
      title: 'As a Stone',
      album: 'Show Us What You Got',
      artist: 'Full Trunk',
      duration: 259,
    },
  ],
  playlists: [
    { id: 1, name: 'Metal', songs: [1, 7, 4] },
    { id: 5, name: 'Israeli', songs: [2, 5] },
  ],

  playSong(song) {
    console.log(
      `Playing ${song.title} from ${song.album} by ${
        song.artist
      } | ${convertDuration1(song.duration)}.`
    )
  },
}
// converts duration to minutes
const convertDuration1 = (duration) => {
  let min = String(Math.floor(duration / 60));
  let sec = String(duration % 60);

  min < 10 ? (min = '0' + String(min)) : min
  sec < 10 ? (sec = '0' + String(sec)) : sec

  return min + ':' + sec
}
// converts minutes duration to duration original 
const convertDuration = (duration) => {
  duration = duration.split(':');
  duration = parseInt(duration[0] * 60) + parseInt(duration[1]);
  return duration;
}

function playSong(id) {
  let index = player.songs.findIndex(i => i.id === id)
  if (index === -1) {
    throw 'No such ID'
  } else {
    player.playSong(player.songs[index])
  }
}

function removeSong(id) {
  const foundSongId = player.songs.findIndex((currSong) => currSong.id === id)

  if (foundSongId === -1) {
    throw err
  }
  // Delete the song from the song list
  player.songs.splice(foundSongId, 1)
  for (let currPlaylist of player.playlists) {
    foundSongIndex = currPlaylist.songs.indexOf(id)

    if (foundSongIndex !== -1) {
      currPlaylist.songs.splice(foundSongIndex, 1)
    }
  }
}
// addSong
// Does an ID exist in the songs

function isIdExist(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return true
  }
  return false
}
// find max ID in song
let arr = player.songs
const uniqueSongs = [...new Set(arr.map((item) => item.id))] // list of all ids

function maxID(arr) {
  let max = 0
  uniqueSongs.length - 1 > max
    ? (max = arr[uniqueSongs.length - 1].id + 1)
    : max;
  return max
}

function addSong(title, album, artist, duration, id = maxID(arr) + 1) {
  if (isIdExist(player.songs, id)) {
    throw 'this id already exist!'

  } else {
    
    duration = convertDuration(duration);
    let newSong = { id, title, album, artist, duration }
    player.songs.push(newSong);
    return id
  }
}

// remove the playList
function removePlaylist(id) {
  const foundSongId = player.playlists.findIndex(
    (currSong) => currSong.id === id
  );
  if (foundSongId === -1) {
    throw err
  } else {
    // // Delete the song from the song list
    player.playlists.splice(foundSongId, 1);
  }
}

let arr2 = player.playlists;
const uniquePlayList = [...new Set(arr2.map((item) => item.id))]; //all the id in one array
// finding out about the max id and making new value from it
function maxID2(arr2) {
  let max = 0;
  uniquePlayList.length - 1 > max
    ? (max = arr2[uniquePlayList.length - 1].id + 1)
    : max
  return max
}

function createPlaylist(name, id = maxID2(arr2)) {
  if (isIdExist(player.playlists, id)) {
    throw `this ${id} id already taken!`

  } else {

    let newSong = { id, name, songs: (songs = []) }
    player.playlists.push(newSong)
    return id
  }
}

function playPlaylist(id) {
  // your code here
}

function editPlaylist(playlistId, songId) {
  // your code here
}

function playlistDuration(id) {
  // your code here
}

function searchByQuery(query) {
  // your code here
}

function searchByDuration(duration) {
  // your code here
}

module.exports = {
  player,
  playSong,
  removeSong,
  addSong,
  removePlaylist,
  createPlaylist,
  playPlaylist,
  editPlaylist,
  playlistDuration,
  searchByQuery,
  searchByDuration,
}