import Category from "./Category";

const AllCategory = ({categorys}) => {

    // console.log(categorys);

    return (
        <div className="py-10 ">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
             {
                categorys ?.map(category => <Category category={category} key={category.product_id}></Category>)
            }
           </div>
        </div>
    );
};

export default AllCategory;