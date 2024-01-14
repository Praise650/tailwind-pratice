class UserService{
    constructor(pageLimit, itemPerPage, currentPage){
        this.pageLimit = pageLimit;
        this.itemPerPage = itemPerPage;
        this.currentPage = currentPage;
    }
}
const userService = new UserService();
export {userService};