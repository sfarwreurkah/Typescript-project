import { useState } from "react";
import { useEffect } from "react";
import { User } from "../services/user-service";
import userService from "../services/user-service";
import { CanceledError } from "axios";
const useUsers = () => {
   const [users, setUsers] = useState<User[]>([]);
     const [error, setError] = useState("");
     const [isLoading, setLoading] = useState(false);
   
     useEffect(() => {
       setLoading(true);
       const { request, cancel } = userService.getAll<User>();
       request
         .then((response) => {
           setUsers(response.data);
           setLoading(false);
         })
         .catch((err) => {
           if (err instanceof CanceledError) return;
           setError(err.message);
           setLoading(false);
         });
         return () => cancel();
     }, []);
     return { users, error, isLoading, setUsers, setError };
}
export default useUsers;