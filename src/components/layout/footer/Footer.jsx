export default function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <div className="mx-4 mt-3">
      <footer className="d-flex justify-content-between align-items-center p-3">
        <div className="col-md-4 mb-0 ">
          <p>© {currentDate} Company, Inc</p>
        </div>

        <div className="nav col-md-4 justify-content-end">
          <p>All rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
