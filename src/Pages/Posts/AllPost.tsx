import FarmerPosts from "../FarmerPosts/FarmerPosts";

const PostPage = () => {
  return (
    <div style={styles.postContainer}>
      <h1 style={styles.title}>Post Title</h1>

      {/* 3-Column Grid for Categories */}
      <div style={styles.categoryGrid}>
        {/* Replace this array with your actual dynamic data source */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div key={item} style={styles.categoryCard}>
            Category {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  postContainer: {
    padding: "20px",
  },
  title: {
    marginBottom: "20px",
    borderBottom: "2px solid #eee",
    paddingBottom: "10px",
  },
  categoryGrid: {
    display: "grid",
    // Creates 3 equal columns; rows are created automatically as items increase
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  categoryCard: {
    padding: "15px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
  },
};

export default function AllPost() {
  return (
    <>
      {/* <PostPage /> */}
      <FarmerPosts />
    </>
  );
}
