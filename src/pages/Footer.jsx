import React from 'react'

function Footer() {
  return (
    <>
            <div class="footer" >
                <footer class="text-center text-white py-4">

                    <div class="container">
                        <section class="mb-4">
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="https://www.facebook.com/"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-facebook-f"></i
                            ></a>
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="https://twitter.com/"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-twitter"></i
                            ></a>
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="https://www.google.com/"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-google"></i
                            ></a>
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="https://www.instagram.com/"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-instagram"></i
                            ></a>
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="https://www.linkedin.com/"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-linkedin"></i
                            ></a>
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-github"></i
                            ></a>
                        </section>
                    </div>

                    <div class="text-center text-dark p-3">
                        <p>&copy; 2023 Rail Booker. All rights reserved.</p>
                    </div>
                </footer>
            </div>

        </>
  )
}

export default Footer