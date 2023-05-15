import "./FooterStyles.css";

export default function Footer() {
  return (
    <footer className="footer">
    <div className="social">
        <h2>Follow Us On</h2>
        <a href="#">
            <i class="fab fa-facebook-f"></i>
        </a> 
        <a href="#">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="#">
            <i class="fab fa-instagram"></i>
        </a> 
        <a href="#">
            <i class="fab fa-youtube"></i>
        </a>
     </div> 
    
     <div class="coppyright">
        <p> Copyright ©2023 All rights reserved | Saverly.com</p>
     </div>
</footer>
  )
}
