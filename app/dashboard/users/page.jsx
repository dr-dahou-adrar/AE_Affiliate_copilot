import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from "next/link";
import Image from "next/image";
import { fetchUsers } from "@/app/lib/data";

const UsersPage = async ({searchParams}) => {

    const q = searchParams?.q || "";  
    const page = searchParams?.page || 1;  //TODO: to always back to page 1 event if user is in page 2 or 3
    const {count, users} = await fetchUsers(q, page)
    // console.log(users)


    return ( 
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search users ..." />

                <Link href="/dashboard/users/add"> 
                <button className={styles.addButton}> Add New </button>
                </Link> 

            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td> 
                                <div className={styles.user}>
                                <Image
                                    src={user.img || "/noavatar.png"}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                {user.username}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.createdAt?.toString().slice(4, 16)}</td>
                            <td>{user.isAdmin ? "Admin" : "Client"}</td>
                            <td>{user.isActive ? "active" : "passive"}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/users/${user.id}`}>
                                        <button className={`${styles.button} ${styles.view}`} > View </button>
                                    </Link>
                                    <button className={`${styles.button} ${styles.delete}`} > Delete </button>
                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>

    );
}
 
export default UsersPage;