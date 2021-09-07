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
    console.log(`Playing ${song.title} from ${song.album} by ${song.artist} | ${convertDuration(song.duration)}.`);
  },
}
// converts duration to minutes 
const convertDuration = (duration) =>{
  let min = Math.floor(duration / 60);
  let sec = duration % 60;

  if(min < 10){
    min = "0" + String(min);
  }
  if (sec < 10) {
    sec = "0" + String(sec);
  }

  return min+':'+sec
}

function playSong(id) {
  for(let song of player.songs){
    if(song.id === id){
      return player.playSong(song);
    }
  }
  throw new Error("No such ID");
}

function removeSong(id) {
  const foundSongId = player.songs.findIndex(currSong => currSong.id === id);

  if (foundSongId === -1) {
   throw err; 
  }
  // Delete the song from the song list
  player.songs.splice(foundSongId, 1);
  for (let currPlaylist of player.playlists) {
  foundSongIndex = currPlaylist.songs.indexOf(id);
  if (foundSongIndex !== -1) {
   currPlaylist.songs.splice(foundSongIndex, 1);
        }
    }
}
let arr = player.songs;
const unique = [...new Set(arr.map(item => item.id))];
const uniqId = (arr) => {
    let newId = Math.floor(Math.random() * 100);
    console.log(newId);
    if (unique.indexOf(newId) === -1){
    return newId;
  }
}
function addSong(title, album, artist, duration, id = uniqId()) {
    if (unique.indexOf(id) !== -1){
      throw new Error("there is such ID");
    }else{
      duration = convertDuration(duration);
      return  arr.push({id ,title, album, artist, duration})
    }
}

function removePlaylist(id) {
  const foundSongId = player.playlists.findIndex(currSong => currSong.id === id);
  if (foundSongId === -1) {
   throw err; 
  }else{
  // // Delete the song from the song list
  player.playlists.splice(foundSongId, 1);
  }
}

function createPlaylist(name, id) {
  // your code here
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
