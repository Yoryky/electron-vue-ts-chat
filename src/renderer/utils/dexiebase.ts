import Dexie from 'dexie'
import Friend from './Friend'

let db = null
const db_version = 1
export function initDexieDb(){
  db = new Dexie('friend_datase')
  db.version(db_version).stores({friends:'++id,name'})
  const  friend = new Friend()
  friend.name = 'yjing'
  friend.age = 28
  friend.sex = 1
  friend.showSize = 40
  db.table('friends').add(friend).then(data=>{
    const  friend = new Friend()
    friend.name = 'yoryky'
    friend.age = 28
    friend.sex = 1
    friend.showSize = 41
    db.friends.where('name').equals('yjing').modify(friend)
    return friend
  }).then(friend=>{
    console.log(`yjing's shoeSize is ${friend.showSize}`)
  }).catch(err=>{
    console.log(err)
  })
}
