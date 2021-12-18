
;; counter
;; <add a description here>

;; constants
;;

;; data maps and vars
;;

;; private functions
;;

;; public functions
;;
(define-public (hello-world)
    (if (is-eq block-height u1)
        (ok (print { msg: "Hello world", tip: block-height, sender: tx-sender }))
        (err (print { msg: "Hello world", tip: block-height, sender: tx-sender }))))