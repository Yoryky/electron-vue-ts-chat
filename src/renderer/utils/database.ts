let db
const customerData = [
  { ssn: '444-44-4444', name: 'Bill', age: 35, email: 'bill@company.com' },
  { ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org' },
]

export function initDataBase() {
  return new Promise((resolve,reject)=>{
    let request = indexedDB.open('mytestdb', 1)
    request.onerror = function(event) {
      console.log('create database error')
      reject('error')
    }

    request.onsuccess = function(event) {
      // @ts-ignore
      db = event.target.result
      resolve('success')
    }


    request.onupgradeneeded = function(event) {
      // @ts-ignore
      db = event.target.result
      if (!db.objectStoreNames.contains('customers')) {
        let objectStore = db.createObjectStore('customers', { keyPath: 'ssn' })
        objectStore.createIndex('name','name',{unique:false})
        objectStore.createIndex('email','email',{unique:true})
      }
      resolve('success')
    }
  })
}

export function initCustomers(){
  return new Promise((resolve,reject)=>{
    let customerObjectStore = db.transaction('customers','readwrite').objectStore('customers')
    customerData.forEach(customer=>{
      customerObjectStore.add(customer)
    })
    resolve('success')
  })
}

export function readData(key){
  let customerObjectStore = db.transaction('customers','readonly').objectStore('customers')
  let request = customerObjectStore.get(key)
  request.onerror = function(event){
    console.log(`error ==> ${event.result}`)
  }

  request.onsuccess = function(event){
    console.log(`name for key is ${request.result.name}`)
  }
}

export function updateData(key){
  let customerObjectStore = db.transaction('customers','readwrite').objectStore('customers')
  let request = customerObjectStore.get(key)
  request.onerror = function(event){
    console.log(`error ==> ${event.result}`)
  }

  request.onsuccess = function(event){
    console.log(`name for key is ${event.target.result.name}`)
    let data = event.target.result
    data.age = 45
    let requestUpdate = customerObjectStore.put(data)
    requestUpdate.onerror = function(event){
      console.log('update error')
    }

    requestUpdate.onsuccess =  function(event){
      console.log('update success')
    }
  }

}

export function testCursor(){
  let objectStore = db.transaction("customers").objectStore("customers")
  objectStore.openCursor().onsuccess = function(event){
    let cursor = event.target.result
    if(cursor){
      console.log(`name for ssn ${cursor.key} is ${cursor.value.name}`)
      cursor.continue()
    }else{
      console.log('no more data')
    }
  }

}

export function testIndex(){
  let objectStore = db.transaction("customers").objectStore("customers")
  let index = objectStore.index('name')
  index.get("Donna").onsuccess = function(event){
    console.log(`donna 's ssn is ${event.target.result.ssn}`)
  }
}

export function testIndexWithCursor(){
  let objectStore = db.transaction("customers").objectStore("customers")
  let index = objectStore.index('name')
  const singleKeyRange = IDBKeyRange.only('Donna')
  index.openCursor(singleKeyRange).onsuccess = function(event){
    let cursor = event.target.result
    if(cursor){
      console.log(`name : ${cursor.key}  ssn = ${cursor.value.ssn}  email =  ${cursor.value.email}`)
      cursor.continue()
    }
  }
}
export function sayHello() {

}

