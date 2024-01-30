import { BsFacebook } from "react-icons/bs";
export default function Footer() {
  
        return (
          <footer>
            <h4 className="">JPEL Farms</h4>
            <p>address 1</p>
            <p>address 2</p>
            <p>1 234 567 8901</p>
            <br></br>
            <p>email@email.com</p>
      
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{marginBottom: "2rem"}}
            >
              <BsFacebook />
            </a>
      
            <p>JPEL Farms &copy; 2024</p>
          </footer>
        );
      };
