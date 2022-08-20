import { createStore } from 'vuex'

export default createStore({
  state: {
    //currentNote:{},
    notes:[
      {
        id:1,
        title:"Notes",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus reprehenderit, aliquid rerum alias dolorum necessitatibus voluptate assumenda nostrum aut cum dignissimos eius quo id, corporis ea voluptates, minima blanditiis.Quae itaque, perferendis consequatur voluptate quidem iusto inventore quod, ipsa in magnam dolorem velit ex omnis asperiores quas dolorum consequuntur ab minus, voluptas sunt alias sit libero. Facere, minima labore.Quam expedita fugit quas? Ipsam, aliquam. Consequatur consequuntur eligendi porro. Doloribus dolore voluptas tenetur ducimus eius voluptatibus, vero hic eveniet inventore ipsam corrupti cumque iure dolorem quo quisquam laborum debitis!Dicta optio, neque, sunt minima, recusandae praesentium perspiciatis eligendi alias amet numquam exercitationem reiciendis quibusdam? Harum iure neque sint nostrum perspiciatis explicabo fuga tempore aperiam consequuntur nam accusantium, ea ullam?Perferendis, voluptatem obcaecati magni ipsum deleniti animi numquam corrupti consectetur odit autem aperiam iste unde minima explicabo. Veritatis voluptates aspernatur ducimus, perspiciatis recusandae molestias dolorem vitae? Officia perferendis sit veritatis.",
        date:"20 may"
      },
      {
        id:2,
        title:"Lorem Ipsum",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus reprehenderit, aliquid rerum alias dolorum necessitatibus voluptate assumenda nostrum aut cum dignissimos eius quo id, corporis ea voluptates, minima blanditiis.Quae itaque, perferendis consequatur voluptate quidem iusto inventore quod, ipsa in magnam dolorem velit ex omnis asperiores quas dolorum consequuntur ab minus, voluptas sunt alias sit libero. Facere, minima labore.Quam expedita fugit quas? Ipsam, aliquam. Consequatur consequuntur eligendi porro. Doloribus dolore voluptas tenetur ducimus eius voluptatibus, vero hic eveniet inventore ipsam corrupti cumque iure dolorem quo quisquam laborum debitis!Dicta optio, neque, sunt minima, recusandae praesentium perspiciatis eligendi alias amet numquam exercitationem reiciendis quibusdam? Harum iure neque sint nostrum perspiciatis explicabo fuga tempore aperiam consequuntur nam accusantium, ea ullam?Perferendis, voluptatem obcaecati magni ipsum deleniti animi numquam corrupti consectetur odit autem aperiam iste unde minima explicabo. Veritatis voluptates aspernatur ducimus, perspiciatis recusandae molestias dolorem vitae? Officia perferendis sit veritatis.Velit itaque natus iste qui obcaecati, sed distinctio aperiam saepe nam autem quas, quam dolorum nulla illo quis modi a est laboriosam inventore. Assumenda quos voluptatum architecto omnis, odit debitis.Voluptatibus praesentium deserunt quaerat quas velit facere libero nesciunt accusantium, alias ratione consectetur eveniet expedita, magnam unde aspernatur dolore quam totam modi! Mollitia eum, tempora nesciunt quo sint fuga in?Omnis beatae debitis adipisci sapiente, maiores fugiat. Eum molestiae ab maxime atque tempora minima rem quasi officiis, aspernatur, repudiandae recusandae earum iusto quos tempore voluptate explicabo corporis inventore eos obcaecati.Ducimus maxime dolorum ea eum fuga voluptatibus vitae dolores dignissimos adipisci quos numquam optio assumenda nostrum hic, id impecommodi labore aperiam earum excepturi libero! Reprehenderit officia id quis voluptatem maxime. Sit veniam, quia itaque sed culpa deserunt minus nihil! Impedit, voluptate ratione?",
        date:"15 Apr"
      },
      {
        id:3,
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus reprehenderit, aliquid rerum alias dolorum",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus reprehenderit, aliquid rerum alias dolorumLorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus reprehenderit, aliquid rerum alias dolorumLorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus reprehenderit, aliquid rerum alias dolorum",
        date:"20 may"
      }
    ]
  },
  getters: {
    getNoteById: (state) => (id) => {
      return state.notes.find(note => note.id == id)
    }
  },
  mutations: {
    /*setCurrentNote(state,payload){
      state.currentNote = state.notes.find(note=> note.id == payload)
      console.log(state.currentNote)
    }*/
  },
  actions: {
  },
  modules: {
  }
})
