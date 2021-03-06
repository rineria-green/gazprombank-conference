<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController {
    /**
     * @Route("/api/session", name="user_login", methods={"POST"})
     */
    public function userLogin() {
        $user = $this->getUser();
        return $this->json($user);
    }

    /**
     * @Route("/api/session", name="get_logged_user", methods={"GET"})
     */
    public function getLoggedUser(){
        $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);
        return $this->json($this->getUser());
    }

    /**
     * @Route("/api/session", name="user_logout", methods={"DELETE"})
     */
    public function userLogout() {
        return true;
    }
}
