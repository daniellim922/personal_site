<script>
    import mail from "../public/assets/icons/mail.png";
</script>

<div class="links-box">
    <div>
        <p>
            Open to new opportunities at all times. Love all things tech,
            startup and business related. Do hit me up for a chat with all
            things relevant! :P
        </p>
        <ul>
            <li>
                <a href="mailto:daniellim922@gmail.com">
                    Daniellim922@gmail.com
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/daniuInSg">LinkedIn</a>
            </li>
            <li>
                <a href="https://www.github.com/daniellim922">Github</a>
            </li>
        </ul>
    </div>
    <div class="links-img-box">
        <img src={mail} alt="icon_of_a_mail" height="100px" />
    </div>
</div>

<style>
    p {
        margin-top: 0;
    }
    ul {
        margin: 0;
        list-style: none;
        padding: 0;
    }
    li {
        margin: 10px 0 10px 0;
    }
    .links-box {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
    }
    .links-img-box {
        display: flex;
        align-items: center;
    }
    a {
        color: black;
    }
</style>
