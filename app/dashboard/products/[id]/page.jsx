import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from "next/image";


const SingleUserPage = () => {
    return ( 
        <div className={styles.container}>

            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>

                    <Image
                        src="/noproduct.jpg"
                        alt=""
                        fill
                    />
                </div>
                Iphone
            </div>
            
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>

                    <label>Title</label>
                    <input type="text" name='title' placeholder='Iphone'/>

                    <label>Price</label>
                    <input type="number" name='price' placeholder='$333'/>

                    <label>Stock</label>
                    <input type="number" name='stock' placeholder='72'/>

                    <label>Color</label>
                    <input type="text" name='color' placeholder='red'/>

                    <label>Size</label>
                    <textarea type="text" name='sizee' placeholder='XXL'/>

                    <label>Category</label>
                    <select name="cat" id="cat">
                        <option value='kitchen'>Kitchen</option>
                        <option value='phone'>Phone</option>
                        <option value='computer'>Computer</option>
                    </select>

                    <textarea name="desc" id="desc" rows="10" placeholder='description'></textarea>
                
                    <button className={styles.button}>Update</button>
                </form>
            </div>
        </div>
     );
}
 
export default SingleUserPage;