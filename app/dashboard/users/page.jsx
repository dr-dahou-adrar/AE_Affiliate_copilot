import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from "next/link";
import Image from "next/image";

const UsersPage = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search users ..." />

                <Link href="/dashboard/users/add"> 
                <button className={styles.addButton}> Add New </button>
                </Link> 

            </div>
            <table className={styles.table}>
                <head>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </head>
                <tbody>
                    <tr>
                        <td> 
                            <div className={styles.user}>
                            <Image
                                src="/noavatar.png"
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
                            />
                            John Doe
                            </div>
                        </td>
                        <td>john@gmail.com</td>
                        <td>24.06.2024</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <Link href="/">
                                <button className={`${styles.button} ${styles.view}`} > View </button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`} > Delete </button>

                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination/>
        </div>

    );
}
 
export default UsersPage;