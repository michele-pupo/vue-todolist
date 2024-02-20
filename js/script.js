/*
 - MILESTONE 1
   Stampare all'interno di una lista HTML un item per ogni todo.
   Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
 - MILESTONE 2
   Visualizzare a fianco ad ogni item ha una ":x:": cliccando su di essa, 
   il todo viene rimosso dalla lista.
 - MILESTONE 3
   Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
   il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene 
   aggiunto alla lista dei todo esistenti.
 - Bonus:
   1- oltre al click sul pulsante per la aggiunta del task, intercettare anche il tasto ENTER 
      per aggiungere il todo alla lista
   2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo 
      corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const { createApp } = Vue

createApp({
    data() {
        return {

            newTodo: '',
            
            todos : [
                    {
                        text: 'Portare fuori per una passeggiata Dylan',
                        done: true,
                    },
                    {
                        text: 'Riempire la caldaia',
                        done: true,
                    },
                    {
                        text: 'Ritirare il secchio della spazzatura',
                        done: false,
                    },
                    {
                        text: 'Controllare batteria pc',
                        done: true,
                    },    
                ],

        }
    },

    methods: {
      
      // metodo che alla pressione del pulsante elimina dalla lista l'elemnto cliccato
      deleteTodo(todoIndex){
        // console.log(todoIndex)
        this.todos.splice(todoIndex, 1)
      },

      // metodo per aggiungere il testo del campo di imput alla lista
      addTodo(){
        // controllo che il campo di input non sia vuoto
        if (this.newTodo.trim() !== '') {
           // console.log("new")
           // console.log(this.newTodo)
           this.todos.push({
             text: this.newTodo,
             done: false,
        }),

           // cancello il contenuto del campo di imput
           this.newTodo = ''
           this.emptyTodo = false
        } else {
           this.emptyTodo = true
        }
      },

      // metodo per togliere o aggiungere testo barrato agli oggetti della lista
      toggleDone(todoIndex) {
        this.todos[todoIndex].done = !this.todos[todoIndex].done
      }
    } 
}).mount('#app');
