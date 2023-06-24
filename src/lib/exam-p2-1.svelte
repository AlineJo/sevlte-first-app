<script>
	import {contactList, selectedContact, selectedContactId} from "./store.js"
	
	
	//1. go to the store file and follow istructions
	//2. List section:
	    //A. display the contact list below as list where they are clickable to selected a contact.
      //B. use css to indicate selection
      //C. clicking again on the list item does deselect the item
	//3. item section:
			//A. if 'selectedContact' has value then text inputs are filled with the contact data and user can
			     // "update"/"delete" or click "close" to deselect the item
	    //A. if 'selectedContact' has no value then empty text inputs are presented and the button "create" is visible

	    
</script>

<div class="container">
    <div class="heading">
        <div class="title-section">
            <h1>List</h1>
        </div>
			  <div class="divider"/>
        <div class="title-section">
            <h1>Item</h1>
            <button>Update</button>
            <button>Delete</button>
            <button>Create</button>
					  <button>Close</button>
        </div>
    </div>
    <div class="content">
        <div class="contacts">
            <!--Place to display list of saved contacts -->
        </div>
			  <div class="divider"/>
        <div class="view">
            <!-- Place to view/edit/create contact -->
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .heading {
        display: flex;
        justify-content: space-between;
        border: 1px solid black;
			  border-width: 1px 1px 0 1px;
    }
    .title-section {
        flex:1;
			  padding:10px;
    }
    .content {
        display: flex;
        height: 100%;
        border: 1px solid black;
    }
		.divider{
				height:100%;
				border-right:1px solid black;
		}
    .contacts, .view {
        flex: 1;
        padding: 5px;
    }
</style>
