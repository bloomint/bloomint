const storage = {
    ensure: (where, obj) => {
      if(!localStorage.getItem(where))
        localStorage.setItem(where, JSON.stringify(obj));
    },
    get: where => 
      JSON.parse(localStorage.getItem(where)),
    set: (where, obj) => {
      localStorage.setItem(where, JSON.stringify(obj));
    }
  }