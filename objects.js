var playlist = {
  artistName:"song titles"
};

function updatePlaylist(obj,key,value){
  return Object.assign({},playlist,{ ['artistName']: "songTitle" });

}