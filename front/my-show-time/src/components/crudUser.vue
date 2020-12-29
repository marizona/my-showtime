<template>
  <div>
    <div class="container">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6">
              <h2>Manage <b> users</b></h2>
            </div>
            <div class="col-sm-6">
              <a
                href="#addEmployeeModel"
                class="btn btn-success"
                data-toggle="modal"
              >
                <span> + Add a user</span></a
              >
            </div>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>username</th>
              <th>email</th>
              <th>admin</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(d, index) in userdata" :key="d">
              <td>{{ d._id }}</td>

              <td>{{ d.username }}</td>
              <td>{{ d.email }}</td>
              <td>{{ d.admin }}</td>

              <td>
                <a
                  href="#edituserModel"
                  class="edit"
                  data-toggle="modal"
                  @click="EditUser(index)"
                  ><svg
                   style="width: 20px"
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    ></path></svg
                ></a
                >
                <a
                  @click="EditUser(index)"
                  href="#deleteuserModel"
                  class="delete"
                  data-toggle="modal"
                  ><svg
                    style="width: 20px"
                    class="w-1 h-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path></svg
                ></a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Edit Modal HTML -->
    <div id="addEmployeeModel" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h4 class="modal-title">Add a user</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Username</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="users.username"
                  required
                />
              </div>
              <div class="form-group">
                <label>email</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="users.email"
                  required
                />
              </div>

              <div class="form-group">
                <label>password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="users.password"
                  required
                />
              </div>
              
            </div>
            <div class="modal-footer">
              <input
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
              />
              <input
                data-dismiss="modal"
                @click="addUser"
                type="submit"
                class="btn btn-success"
                value="Add"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Edit Modal HTML -->
    <div id="edituserModel" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h4 class="modal-title">update a user</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Username</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="userdata[UserIdEdit].username"
                />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="userdata[UserIdEdit].email"
                />
              </div>

              <div class="form-group">
                <label>password</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="userdata[UserIdEdit].password"
                />
              </div>
              <div class="form-group">
                <label>Admin</label>
                <input
                  type="checkbox"
                  class="form-control"
                  v-model="userdata[UserIdEdit].admin"
                />
              </div>
              
            </div>
            <div class="modal-footer">
              <input
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
              />
              <input
                data-dismiss="modal"
                type="submit"
                class="btn btn-info"
                value="Save"
                @click="modifyUser(userdata[UserIdEdit])"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Delete Modal HTML -->

    <div id="deleteuserModel" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h4 class="modal-title">Delete a user</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to delete this user?</p>
              <p class="text-warning">
                <small>Once you delete it you cannot go back</small>
              </p>
            </div>
            <div class="modal-footer">
              <input
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
              />
              <input
                type="submit"
                data-dismiss="modal"
                class="btn btn-danger"
                value="Delete"
                @click="deleteUser(userdata[UserIdEdit]._id)"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.fetchUser();
    //     this.privilege();
    // setTimeout(() => {
    //    if (

    //       this.$store.state.admin == false
    //     ) {
    //       this.$router.push({ path: "/" });
    //     }
    // }, 1000);
  },
  computed: {
    userdata() {
      return this.user;
    },
  },
  methods: {
    EditUser(id) {
      this.UserIdEdit = id;
    },
    modifyUser(user) {
      // var vm = this;

      this.axios
        .put(
          'http://localhost:3000/users/' + user._id,
          {
            username: user.username,
            email: user.email,
            admin: user.admin,
            password: user.password,
          
          },

          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdEB0ZXN0LmZyIiwicGFzc3dvcmQiOiJ0ZXN0dGVzdCJ9LCJpYXQiOjE2MDkxNjc4MjIsImV4cCI6MTYxMDE2NzgyMn0.WPR1A5flwrQ_sryW9sn14kbdTHgtgxEHiZgZZQgX03w',
            },
          },
        )
        .then(function (response) {
          console.log(response.data);
        });
    },
    fetchUser() {
      var vm = this;
      this.axios
        .get('http://localhost:3000/users',  {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdEB0ZXN0LmZyIiwicGFzc3dvcmQiOiJ0ZXN0dGVzdCJ9LCJpYXQiOjE2MDkxNjc4MjIsImV4cCI6MTYxMDE2NzgyMn0.WPR1A5flwrQ_sryW9sn14kbdTHgtgxEHiZgZZQgX03w',
            },
          })

        .then(function (response) {
          console.log(response.data);
          vm.user = response.data;
        });
    },
    async deleteUser(id) {
     
     let vm = this
      this.axios
        .delete("http://localhost:3000/users/" + id,  {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdEB0ZXN0LmZyIiwicGFzc3dvcmQiOiJ0ZXN0dGVzdCJ9LCJpYXQiOjE2MDkxNjc4MjIsImV4cCI6MTYxMDE2NzgyMn0.WPR1A5flwrQ_sryW9sn14kbdTHgtgxEHiZgZZQgX03w',
            },
          },)
        .then(function () {
            window.location.reload()
          
          vm.fetchUser();
        });
    },
    addUser() {

      var vm = this;
      this.axios
        .post(
          'http://localhost:3000/users/',
          {
            username: this.users.username,
            email: this.users.email,
            password: this.users.password
           
        
          },
        
        )
        .then(function (response) {
          console.log(response.data);
          vm.fetchUser();
          vm.users.username = '';
          vm.users.email = '';
          vm.users.password= '';
          vm.users.admin = '';
       
        });
    },
  },
  data() {
    return {
      user: [],
      users: {
        password: '',
        username: '',
        email: '',
        admin: '',
      
      },
      UserIdEdit: 0,
      privileges: [],
    };
  },
};
</script>
<style scoped>
.table-wrapper {
  background: #fff;
  padding: 20px 25px;
  margin: 30px 0;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.table-title {
  padding-bottom: 15px;
  background: #435d7d;
  color: #fff;
  padding: 16px 30px;
  margin: -20px -25px 10px;
  border-radius: 3px 3px 0 0;
}
.table-title h2 {
  margin: 5px 0 0;
  font-size: 24px;
}
.table-title .btn-group {
  float: right;
}
.table-title .btn {
  color: #fff;
  float: right;
  font-size: 13px;
  border: none;
  min-width: 50px;
  border-radius: 2px;
  border: none;
  outline: none !important;
  margin-left: 10px;
}
.table-title .btn i {
  float: left;
  font-size: 21px;
  margin-right: 5px;
}
.table-title .btn span {
  float: left;
  margin-top: 2px;
}
table.table tr th,
table.table tr td {
  border-color: #e9e9e9;
  padding: 12px 15px;
  vertical-align: middle;
}
table.table tr th:first-child {
  width: 60px;
}
table.table tr th:last-child {
  width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
  background: #f5f5f5;
}
table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}
table.table td:last-child i {
  opacity: 0.9;
  font-size: 22px;
  margin: 0 5px;
}
table.table td a {
  font-weight: bold;
  color: #566787;
  display: inline-block;
  text-decoration: none;
  outline: none !important;
}
table.table td a:hover {
  color: #000000;
}
table.table td a.edit {
  color: #ffc107;
}
table.table td a.delete {
  color: #c5261a;
}
table.table td i {
  font-size: 19px;
}
table.table .avatar {
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.pagination {
  float: right;
  margin: 0 0 5px;
}
.pagination li a {
  border: none;
  font-size: 13px;
  min-width: 30px;
  min-height: 30px;
  color: #999;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 2px !important;
  text-align: center;
  padding: 0 6px;
}
.pagination li a:hover {
  color: #666;
}
.pagination li.active a,
.pagination li.active a.page-link {
  background: #03a9f4;
}
.pagination li.active a:hover {
  background: #0397d6;
}
.pagination li.disabled i {
  color: #ccc;
}
.pagination li i {
  font-size: 16px;
  padding-top: 6px;
}
.hint-text {
  float: left;
  margin-top: 10px;
  font-size: 13px;
}
/* Custom checkbox */
.custom-checkbox {
  position: relative;
}
.custom-checkbox input[type='checkbox'] {
  opacity: 0;
  position: absolute;
  margin: 5px 0 0 3px;
  z-index: 9;
}
.custom-checkbox label:before {
  width: 18px;
  height: 18px;
}
.custom-checkbox label:before {
  content: '';
  margin-right: 10px;
  display: inline-block;
  vertical-align: text-top;
  background: white;
  border: 1px solid #bbb;
  border-radius: 2px;
  box-sizing: border-box;
  z-index: 2;
}
.custom-checkbox input[type='checkbox']:checked + label:after {
  content: '';
  position: absolute;
  left: 6px;
  top: 3px;
  width: 6px;
  height: 11px;
  border: solid #000;
  border-width: 0 3px 3px 0;
  transform: inherit;
  z-index: 3;
  transform: rotateZ(45deg);
}
.custom-checkbox input[type='checkbox']:checked + label:before {
  border-color: #03a9f4;
  background: #03a9f4;
}
.custom-checkbox input[type='checkbox']:checked + label:after {
  border-color: #fff;
}
.custom-checkbox input[type='checkbox']:disabled + label:before {
  color: #b8b8b8;
  cursor: auto;
  box-shadow: none;
  background: #ddd;
}
/* Modal styles */
.modal .modal-dialog {
  max-width: 400px;
}
.modal .modal-header,
.modal .modal-body,
.modal .modal-footer {
  padding: 20px 30px;
}
.modal .modal-content {
  border-radius: 3px;
}
.modal .modal-footer {
  background: #ecf0f1;
  border-radius: 0 0 3px 3px;
}
.modal .modal-title {
  display: inline-block;
}
.modal .form-control {
  border-radius: 2px;
  box-shadow: none;
  border-color: #dddddd;
}
.modal textarea.form-control {
  resize: vertical;
}
.modal .btn {
  border-radius: 2px;
  min-width: 100px;
}
.modal form label {
  font-weight: normal;
}
</style>